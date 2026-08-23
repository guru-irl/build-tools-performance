import React from 'react';
const LABEL_40392 = 'component_40392';
export function Component40392({ value = 40392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40392, 'data-value': derived.doubled }, children);
}
export default Component40392;
