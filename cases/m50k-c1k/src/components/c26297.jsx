import React from 'react';
const LABEL_26297 = 'component_26297';
export function Component26297({ value = 26297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26297, 'data-value': derived.doubled }, children);
}
export default Component26297;
