import React from 'react';
const LABEL_30832 = 'component_30832';
export function Component30832({ value = 30832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30832, 'data-value': derived.doubled }, children);
}
export default Component30832;
