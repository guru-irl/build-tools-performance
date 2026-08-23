import React from 'react';
const LABEL_41224 = 'component_41224';
export function Component41224({ value = 41224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41224, 'data-value': derived.doubled }, children);
}
export default Component41224;
