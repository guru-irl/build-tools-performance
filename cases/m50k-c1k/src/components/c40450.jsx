import React from 'react';
const LABEL_40450 = 'component_40450';
export function Component40450({ value = 40450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40450, 'data-value': derived.doubled }, children);
}
export default Component40450;
