import React from 'react';
const LABEL_14863 = 'component_14863';
export function Component14863({ value = 14863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14863, 'data-value': derived.doubled }, children);
}
export default Component14863;
