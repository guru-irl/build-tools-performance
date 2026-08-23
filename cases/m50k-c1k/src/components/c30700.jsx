import React from 'react';
const LABEL_30700 = 'component_30700';
export function Component30700({ value = 30700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30700, 'data-value': derived.doubled }, children);
}
export default Component30700;
