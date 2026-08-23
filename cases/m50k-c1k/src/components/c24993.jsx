import React from 'react';
const LABEL_24993 = 'component_24993';
export function Component24993({ value = 24993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24993, 'data-value': derived.doubled }, children);
}
export default Component24993;
