import React from 'react';
const LABEL_11666 = 'component_11666';
export function Component11666({ value = 11666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11666, 'data-value': derived.doubled }, children);
}
export default Component11666;
