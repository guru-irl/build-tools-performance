import React from 'react';
const LABEL_31862 = 'component_31862';
export function Component31862({ value = 31862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31862, 'data-value': derived.doubled }, children);
}
export default Component31862;
