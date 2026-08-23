import React from 'react';
const LABEL_19097 = 'component_19097';
export function Component19097({ value = 19097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19097, 'data-value': derived.doubled }, children);
}
export default Component19097;
