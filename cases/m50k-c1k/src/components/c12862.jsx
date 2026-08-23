import React from 'react';
const LABEL_12862 = 'component_12862';
export function Component12862({ value = 12862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12862, 'data-value': derived.doubled }, children);
}
export default Component12862;
