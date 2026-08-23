import React from 'react';
const LABEL_30088 = 'component_30088';
export function Component30088({ value = 30088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30088, 'data-value': derived.doubled }, children);
}
export default Component30088;
