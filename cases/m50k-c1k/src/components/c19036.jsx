import React from 'react';
const LABEL_19036 = 'component_19036';
export function Component19036({ value = 19036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19036, 'data-value': derived.doubled }, children);
}
export default Component19036;
