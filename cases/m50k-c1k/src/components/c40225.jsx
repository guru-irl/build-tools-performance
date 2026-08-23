import React from 'react';
const LABEL_40225 = 'component_40225';
export function Component40225({ value = 40225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40225, 'data-value': derived.doubled }, children);
}
export default Component40225;
