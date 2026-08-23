import React from 'react';
const LABEL_37363 = 'component_37363';
export function Component37363({ value = 37363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37363, 'data-value': derived.doubled }, children);
}
export default Component37363;
