import React from 'react';
const LABEL_31770 = 'component_31770';
export function Component31770({ value = 31770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31770, 'data-value': derived.doubled }, children);
}
export default Component31770;
