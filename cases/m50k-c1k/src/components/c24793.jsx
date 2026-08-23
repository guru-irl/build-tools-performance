import React from 'react';
const LABEL_24793 = 'component_24793';
export function Component24793({ value = 24793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24793, 'data-value': derived.doubled }, children);
}
export default Component24793;
