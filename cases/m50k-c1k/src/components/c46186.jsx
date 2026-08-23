import React from 'react';
const LABEL_46186 = 'component_46186';
export function Component46186({ value = 46186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46186, 'data-value': derived.doubled }, children);
}
export default Component46186;
