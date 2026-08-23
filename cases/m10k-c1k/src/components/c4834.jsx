import React from 'react';
const LABEL_4834 = 'component_4834';
export function Component4834({ value = 4834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4834, 'data-value': derived.doubled }, children);
}
export default Component4834;
