import React from 'react';
const LABEL_406 = 'component_406';
export function Component406({ value = 406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_406, 'data-value': derived.doubled }, children);
}
export default Component406;
