import React from 'react';
const LABEL_3064 = 'component_3064';
export function Component3064({ value = 3064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3064, 'data-value': derived.doubled }, children);
}
export default Component3064;
