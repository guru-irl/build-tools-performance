import React from 'react';
const LABEL_45863 = 'component_45863';
export function Component45863({ value = 45863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45863, 'data-value': derived.doubled }, children);
}
export default Component45863;
