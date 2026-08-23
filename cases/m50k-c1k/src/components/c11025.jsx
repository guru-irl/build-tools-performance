import React from 'react';
const LABEL_11025 = 'component_11025';
export function Component11025({ value = 11025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11025, 'data-value': derived.doubled }, children);
}
export default Component11025;
