import React from 'react';
const LABEL_135 = 'component_135';
export function Component135({ value = 135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_135, 'data-value': derived.doubled }, children);
}
export default Component135;
