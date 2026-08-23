import React from 'react';
const LABEL_24995 = 'component_24995';
export function Component24995({ value = 24995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24995, 'data-value': derived.doubled }, children);
}
export default Component24995;
