import React from 'react';
const LABEL_42414 = 'component_42414';
export function Component42414({ value = 42414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42414, 'data-value': derived.doubled }, children);
}
export default Component42414;
