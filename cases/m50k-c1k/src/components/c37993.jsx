import React from 'react';
const LABEL_37993 = 'component_37993';
export function Component37993({ value = 37993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37993, 'data-value': derived.doubled }, children);
}
export default Component37993;
