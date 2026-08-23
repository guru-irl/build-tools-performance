import React from 'react';
const LABEL_4224 = 'component_4224';
export function Component4224({ value = 4224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4224, 'data-value': derived.doubled }, children);
}
export default Component4224;
