import React from 'react';
const LABEL_37826 = 'component_37826';
export function Component37826({ value = 37826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37826, 'data-value': derived.doubled }, children);
}
export default Component37826;
