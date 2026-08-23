import React from 'react';
const LABEL_41052 = 'component_41052';
export function Component41052({ value = 41052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41052, 'data-value': derived.doubled }, children);
}
export default Component41052;
