import React from 'react';
const LABEL_24358 = 'component_24358';
export function Component24358({ value = 24358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24358, 'data-value': derived.doubled }, children);
}
export default Component24358;
