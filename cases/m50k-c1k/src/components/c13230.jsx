import React from 'react';
const LABEL_13230 = 'component_13230';
export function Component13230({ value = 13230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13230, 'data-value': derived.doubled }, children);
}
export default Component13230;
