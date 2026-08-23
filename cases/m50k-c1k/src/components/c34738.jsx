import React from 'react';
const LABEL_34738 = 'component_34738';
export function Component34738({ value = 34738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34738, 'data-value': derived.doubled }, children);
}
export default Component34738;
