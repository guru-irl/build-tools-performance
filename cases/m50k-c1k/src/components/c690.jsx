import React from 'react';
const LABEL_690 = 'component_690';
export function Component690({ value = 690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_690, 'data-value': derived.doubled }, children);
}
export default Component690;
