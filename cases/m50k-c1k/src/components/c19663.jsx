import React from 'react';
const LABEL_19663 = 'component_19663';
export function Component19663({ value = 19663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19663, 'data-value': derived.doubled }, children);
}
export default Component19663;
