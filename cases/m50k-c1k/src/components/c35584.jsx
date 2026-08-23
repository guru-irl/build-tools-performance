import React from 'react';
const LABEL_35584 = 'component_35584';
export function Component35584({ value = 35584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35584, 'data-value': derived.doubled }, children);
}
export default Component35584;
