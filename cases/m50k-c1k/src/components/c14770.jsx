import React from 'react';
const LABEL_14770 = 'component_14770';
export function Component14770({ value = 14770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14770, 'data-value': derived.doubled }, children);
}
export default Component14770;
