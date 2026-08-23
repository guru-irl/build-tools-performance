import React from 'react';
const LABEL_14225 = 'component_14225';
export function Component14225({ value = 14225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14225, 'data-value': derived.doubled }, children);
}
export default Component14225;
