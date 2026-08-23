import React from 'react';
const LABEL_16375 = 'component_16375';
export function Component16375({ value = 16375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16375, 'data-value': derived.doubled }, children);
}
export default Component16375;
