import React from 'react';
const LABEL_45770 = 'component_45770';
export function Component45770({ value = 45770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45770, 'data-value': derived.doubled }, children);
}
export default Component45770;
