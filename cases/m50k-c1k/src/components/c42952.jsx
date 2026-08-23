import React from 'react';
const LABEL_42952 = 'component_42952';
export function Component42952({ value = 42952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42952, 'data-value': derived.doubled }, children);
}
export default Component42952;
