import React from 'react';
const LABEL_31793 = 'component_31793';
export function Component31793({ value = 31793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31793, 'data-value': derived.doubled }, children);
}
export default Component31793;
