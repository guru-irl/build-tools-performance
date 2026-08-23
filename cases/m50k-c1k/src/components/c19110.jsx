import React from 'react';
const LABEL_19110 = 'component_19110';
export function Component19110({ value = 19110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19110, 'data-value': derived.doubled }, children);
}
export default Component19110;
