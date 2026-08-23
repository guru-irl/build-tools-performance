import React from 'react';
const LABEL_5806 = 'component_5806';
export function Component5806({ value = 5806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5806, 'data-value': derived.doubled }, children);
}
export default Component5806;
