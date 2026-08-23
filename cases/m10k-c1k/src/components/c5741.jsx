import React from 'react';
const LABEL_5741 = 'component_5741';
export function Component5741({ value = 5741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5741, 'data-value': derived.doubled }, children);
}
export default Component5741;
