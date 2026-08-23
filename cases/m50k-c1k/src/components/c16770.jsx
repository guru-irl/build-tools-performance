import React from 'react';
const LABEL_16770 = 'component_16770';
export function Component16770({ value = 16770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16770, 'data-value': derived.doubled }, children);
}
export default Component16770;
