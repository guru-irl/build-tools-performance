import React from 'react';
const LABEL_42274 = 'component_42274';
export function Component42274({ value = 42274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42274, 'data-value': derived.doubled }, children);
}
export default Component42274;
