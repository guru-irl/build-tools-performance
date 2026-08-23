import React from 'react';
const LABEL_23088 = 'component_23088';
export function Component23088({ value = 23088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23088, 'data-value': derived.doubled }, children);
}
export default Component23088;
