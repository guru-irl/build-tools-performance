import React from 'react';
const LABEL_41050 = 'component_41050';
export function Component41050({ value = 41050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41050, 'data-value': derived.doubled }, children);
}
export default Component41050;
