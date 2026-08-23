import React from 'react';
const LABEL_6770 = 'component_6770';
export function Component6770({ value = 6770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6770, 'data-value': derived.doubled }, children);
}
export default Component6770;
