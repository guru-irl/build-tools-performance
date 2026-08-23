import React from 'react';
const LABEL_24214 = 'component_24214';
export function Component24214({ value = 24214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24214, 'data-value': derived.doubled }, children);
}
export default Component24214;
