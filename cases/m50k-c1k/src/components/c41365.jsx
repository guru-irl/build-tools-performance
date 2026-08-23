import React from 'react';
const LABEL_41365 = 'component_41365';
export function Component41365({ value = 41365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41365, 'data-value': derived.doubled }, children);
}
export default Component41365;
