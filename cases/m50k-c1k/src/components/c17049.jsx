import React from 'react';
const LABEL_17049 = 'component_17049';
export function Component17049({ value = 17049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17049, 'data-value': derived.doubled }, children);
}
export default Component17049;
