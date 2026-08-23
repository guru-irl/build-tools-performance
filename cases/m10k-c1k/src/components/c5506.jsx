import React from 'react';
const LABEL_5506 = 'component_5506';
export function Component5506({ value = 5506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5506, 'data-value': derived.doubled }, children);
}
export default Component5506;
