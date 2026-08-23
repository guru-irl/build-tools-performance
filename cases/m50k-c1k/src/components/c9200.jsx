import React from 'react';
const LABEL_9200 = 'component_9200';
export function Component9200({ value = 9200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9200, 'data-value': derived.doubled }, children);
}
export default Component9200;
