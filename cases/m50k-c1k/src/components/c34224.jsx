import React from 'react';
const LABEL_34224 = 'component_34224';
export function Component34224({ value = 34224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34224, 'data-value': derived.doubled }, children);
}
export default Component34224;
